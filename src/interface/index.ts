interface Theme {
  color: string;
  textColor: string;
  hover: string;
}
export interface Chain {
  id: number;
  title: string;
  icon: string;
  symbol: string;
  name: string;
  theme: Theme;
}
