"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FilePreviewSchema } from "./file-preview.schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Gallery } from "./gallery";

export const FilePreviewForm = () => {
  const form = useForm<z.infer<typeof FilePreviewSchema>>({
    resolver: zodResolver(FilePreviewSchema),
    defaultValues: {
      title: "",
      files: [],
    },
  });

  const onSubmit = (values: z.infer<typeof FilePreviewSchema>) => {
    // Convert object to FormData - since we are uploading files
    const formData = new FormData();

    formData.append("title", values.title);
    // Take note of values.files[i] - since we are passing an array
    for (let i = 0; i < values.files.length; i++) {
      formData.append("files", values.files[i]);
    }

    console.info("The form data is: ", formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter a title" {...field} />
              </FormControl>
              <FormDescription>
                This is the title for the image gallery.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={(e) =>
                    field.onChange(Array.from(e.target.files || []))
                  }
                />
              </FormControl>
              <FormDescription>
                This is form the images for the gallery.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Gallery files={form.watch("files") || []} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
