"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Definir el esquema de validación con Zod
const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Debe ser un correo electrónico válido.",
  }),
  message: z.string().min(5, {
    message: "El mensaje debe tener al menos 5 caracteres.",
  }),
});

export function ContactForm() {
  // Definir el formulario con react-hook-form y Zod
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  // Manejador del envío del formulario
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Hacer algo con los valores del formulario (ejemplo: enviar al servidor)
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo: Nombre completo */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre y Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre completo" {...field} />
              </FormControl>
              <FormDescription>
                Por favor, introduce tu nombre completo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo: Correo electrónico */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="tuemail@ejemplo.com" {...field} />
              </FormControl>
              <FormDescription>
                Introduce tu correo electrónico de contacto.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo: Mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Tu mensaje" {...field} />
              </FormControl>
              <FormDescription>¿En qué podemos ayudarte?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botón de envío */}
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
