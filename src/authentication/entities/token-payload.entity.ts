export interface TokenPayload {
  //This is the "issued at" timestamp, indicating when the token was created.
  iat: number;    
  exp: number;  
  //This is the "expiration" timestamp, indicating when the token will expire.
  email: string;
  isTwoFactorAuthenticated?: boolean;
  isTwoFactorAuthenticationEnabled: boolean;
}
