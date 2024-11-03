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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {/* Campo: Nombre completo */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-purple-200">
                Nombre y Apellidos
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Tu nombre completo"
                  {...field}
                  className="w-full dark:text-purple-200 dark:bg-neutral-800 dark:border-purple-300"
                />
              </FormControl>
              <FormDescription className="dark:text-purple-300">
                Por favor, introduce tu nombre completo.
              </FormDescription>
              <FormMessage className="dark:text-red-300" />
            </FormItem>
          )}
        />

        {/* Campo: Correo electrónico */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-purple-200">
                Correo Electrónico
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="tuemail@ejemplo.com"
                  {...field}
                  className="w-full dark:text-purple-200 dark:bg-neutral-800 dark:border-purple-300"
                />
              </FormControl>
              <FormDescription className="dark:text-purple-300">
                Introduce tu correo electrónico de contacto.
              </FormDescription>
              <FormMessage className="dark:text-red-300" />
            </FormItem>
          )}
        />

        {/* Campo: Mensaje */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="dark:text-purple-200">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tu mensaje"
                  {...field}
                  className="w-full min-h-[200px] dark:text-purple-200 dark:bg-neutral-800 dark:border-purple-300"
                />
              </FormControl>
              <FormDescription className="dark:text-purple-300">
                ¿En qué podemos ayudarte?
              </FormDescription>
              <FormMessage className="dark:text-red-300" />
            </FormItem>
          )}
        />

        {/* Botón de envío */}
        <Button
          type="submit"
          className="w-full dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
