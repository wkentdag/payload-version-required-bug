import { CollectionConfig } from "payload/types";

const Bars: CollectionConfig = {
  slug: "bars",
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
      name: "barfield",
      type: "text",
      required: true,
    },
  ],
};

export default Bars;
