/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
      user?:
        | import("node-appwrite").Models.User<
            import("node-appwrite").Models.Preferences<{}>
          >;
    }
  }