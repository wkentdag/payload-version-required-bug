import { GlobalConfig } from "payload/types";

const Test: GlobalConfig = {
  slug: "test",
  fields: [
    {
      name: "union_field",
      label: "Union",
      type: "relationship",
      hasMany: true,
      relationTo: ["foos", "bars", "versionedfoos"],
      admin: {
        isSortable: true,
      },
    },
  ],
};

export default Test;
