// components/ContactForm.tsx
'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"



// Define the schema using zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://formspree.io/f/movavapj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Show success toast
        toast({
          title: "Message Sent Succesfully!!", 
          style: { maxWidth: '300px' },      
        })
      } else {
        // Show error toast
        toast({
           variant: "destructive",
          title: "Error!",
          style: { maxWidth: '300px' },      
        })
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Show error toast
      toast({
         variant: "destructive",
        title: "Error!",    
        style: { maxWidth: '300px' },   
      })
    }
  };

  return (
    <div className="flex justify-center mt-8 h-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-4/5 md:w-3/5 lg:w-2/5 border border-white p-6 pb-8 rounded-lg bg-customBlueGray shadow-md">
        <h2 className="text-2xl text-gray-100 text-center mb-4">Let&apos;s get in touch! Leave me your message. 💬</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-100">
            Name
          </label>
          <Input
            id="name"
            {...register('name')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-[#171923]"
          />
          {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-100">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-[#171923]"
          />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-100">
            Message
          </label>
          <Textarea
            id="message"
            {...register('message')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-[#171923]"
          />
          {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;

