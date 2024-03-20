import { CollectionConfig } from "payload/types";

const Foos: CollectionConfig = {
  slug: "foos",
  auth: true,
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "foofield",
      type: "text",
      required: true,
    },
  ],
};

export default Foos;
