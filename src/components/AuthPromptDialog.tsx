import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AuthPromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

const AuthPromptDialog = ({ 
  open, 
  onOpenChange,
  title = "Sign In Required",
  description = "Please sign in or create an account to continue."
}: AuthPromptDialogProps) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    onOpenChange(false);
    navigate("/auth");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-4">
          <Button onClick={handleSignIn} className="w-full">
            Sign In
          </Button>
          <Button 
            variant="outline" 
            onClick={handleSignIn}
            className="w-full"
          >
            Create Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthPromptDialog;
