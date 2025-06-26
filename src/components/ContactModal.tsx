import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Links } from "@/data/links";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

type ContactModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm p-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold text-primary mb-2">Contact Info</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-center">
          <div className="font-semibold text-lg">Abdul Hannan</div>
          <div className="text-muted-foreground">{Links.location}</div>
          <div className="flex flex-col gap-1 items-center mt-2">
            <a href={Links.email} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> {Links.emailonly}
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> <span>{Links.phone}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a href={Links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href={Links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href={Links.email} aria-label="Email" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
            <a href={Links.whatsapp} aria-label="Email" className="text-gray-400 hover:text-primary transition-colors">
              <FaWhatsapp  size={22} />
            </a>
            <a href={Links.instagram} aria-label="Email" className="text-gray-400 hover:text-primary transition-colors">
              <FaInstagram  size={22} />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}