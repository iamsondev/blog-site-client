import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CreateBlogForm() {
  const createBlog = async (formData: FormData) => {
    "use server";
    console.log(formData.get("title"));
  };
  return (
    <div>
      <Card className="mx-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>Write your content here</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="blog-form" action={createBlog}>
            <FieldGroup>
              <Field>
                <FieldLabel>Title</FieldLabel>
                <Input type="text" name="title" />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button form="blog-form" type="submit" className="w-full ">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
