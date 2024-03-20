import { CollectionConfig } from "payload/types";
import FoosConfig from "./Foos";

const VersionFoos: CollectionConfig = {
  ...FoosConfig,
  slug: "versionedfoos",
  versions: {
    drafts: true,
  },
};

export default VersionFoos;
