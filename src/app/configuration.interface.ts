import { Environment } from "./environment.enum";

export interface Configuration {
  apiUrl?: string;
  stage?: Environment;
}
