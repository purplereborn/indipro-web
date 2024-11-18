export interface IAccordion {
  key: "property" | "service" | "other";
  checked: boolean;
  title: string;
  list: {
    key: string;
    title: string;
  }[];
}
