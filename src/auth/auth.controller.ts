import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  login() {
    // https://firebase.google.com/docs/reference/rest/database#section-streaming-patch
    // https://developer.github.com/v3/#authentication
    // https://docs.oracle.com/en/cloud/saas/commerce-cloud/19d/occ-developer/rest-api-authentication.html
    // https://developer.okta.com/docs/reference/api/authn/#primary-authentication-with-trusted-application
    return 'access_token';
  }

  @Post('oauth/:service')
  oauth() {
    // 'facebook' => [
    //     'client_id' => env('FACEBOOK_APP_ID'),
    //     'client_secret' => env('FACEBOOK_APP_SECRET'),
    //     'redirect' => env('FACEBOOK_APP_CALLBACK_URL'),
    // ],
    // 'github' => [
    //     'client_id' => env('GITHUB_APP_ID'),
    //     'client_secret' => env('GITHUB_APP_SECRET'),
    //     'redirect' => env('GITHUB_APP_CALLBACK_URL'),
    // ],
    // 'twitter' => [
    //     'client_id' => env('TWITTER_APP_ID'),
    //     'client_secret' => env('TWITTER_APP_SECRET'),
    //     'redirect' => env('TWITTER_APP_CALLBACK_URL'),
    // ],
    // 'google' => [
    //     'client_id' => env('GOOGLE_APP_ID'),
    //     'client_secret' => env('GOOGLE_APP_SECRET'),
    //     'redirect' => env('GOOGLE_APP_CALLBACK_URL'),
    // ]
    return 'create or get user or authorized';
  }
}
