import { VideoProviderRegistry } from "../core"
import AliceProvider from "./alice-provider.js";
import BobProvider from "./bob-provider.js";
import CharlieProvider from "./charlie-provider.js";

export default new VideoProviderRegistry({
  // alice: AliceProvider,
  // bob: BobProvider,
  // charlie: CharlieProvider,
});
