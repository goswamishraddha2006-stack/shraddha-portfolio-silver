import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// EmailJS credentials — get yours at https://www.emailjs.com
// Public key is safe in client code (restrict allowed domains in EmailJS dashboard)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});

type ContactFormProps = {
  trigger: React.ReactNode;
};

export function ContactForm({ trigger }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // Honeypot — bots will fill this
    if ((fd.get("botcheck") as string)?.length) return;

    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      toast.error("Email service not configured yet. Add your Web3Forms key.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: parsed.data.name,
          replyto: parsed.data.email,
          subject: `[Portfolio] ${parsed.data.subject}`,
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent! I'll reply soon.");
        formEl.reset();
        setOpen(false);
      } else {
        toast.error(data.message ?? "Failed to send. Try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="glass neon-border max-w-lg border-neon-purple/30 sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            <span className="text-gradient">Send a message</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Drop your details and I&apos;ll get back to you over email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* honeypot */}
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

          <div className="grid gap-2">
            <Label htmlFor="cf-name">Name</Label>
            <Input
              id="cf-name"
              name="name"
              required
              maxLength={100}
              placeholder="Your name"
              className="bg-background/40 focus-visible:ring-neon-purple"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cf-email">Email</Label>
            <Input
              id="cf-email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="you@example.com"
              className="bg-background/40 focus-visible:ring-neon-purple"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cf-subject">Subject</Label>
            <Input
              id="cf-subject"
              name="subject"
              required
              maxLength={150}
              placeholder="Let's collaborate on…"
              className="bg-background/40 focus-visible:ring-neon-purple"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cf-message">Message</Label>
            <Textarea
              id="cf-message"
              name="message"
              required
              maxLength={2000}
              rows={5}
              placeholder="Tell me a bit about your idea…"
              className="bg-background/40 focus-visible:ring-neon-purple"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-neon w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
