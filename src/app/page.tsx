"use client"
import HeroSection from "@/components/base/HeroSection";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";


export default function Home() {
  const { toast } = useToast()
  const searchParams = useSearchParams();
  const router = useRouter();
  const verified = searchParams.get("verified");
  useEffect(() => {
    if (verified) {
      const timeout = setTimeout(() => {
        router.replace("/", undefined, { shallow: true });
        toast({(property) shallow: boolean
          title: "Success",
          description: "Successfully verified", //toast wasnt working until i use timeout
        });
      }, 0);
  
      return () => clearTimeout(timeout);
    }
  }, [verified, toast, router]);
  return (


    <div><HeroSection/>
    </div>
  );
}
