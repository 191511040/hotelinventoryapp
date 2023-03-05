import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";
import { Appconfig } from "./appconfig.interface";


export const APP_SERVICE_CONFIG = new InjectionToken<Appconfig>('app.config')

export const APP_CONFIG: Appconfig = {
  apiEndpoint: environment.apiEndpoint
}
