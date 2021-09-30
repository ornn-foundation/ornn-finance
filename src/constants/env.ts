interface PropsEnv {
  host: string;
  hostApi: string;
  prefix: string;
}

export interface Env {
  env: PropsEnv;
}

export const ENV: PropsEnv = {
  host: process.env.HOST,
  hostApi: process.env.HOST_API,
  prefix: process.env.PRE_FIX,
};
