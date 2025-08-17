export interface Footer {
  address: string[];
  links: {
    label: {
      id: string;
      en: string;
    };
    url: string;
  }[];
  policies: {
    label: {
      id: string;
      en: string;
    };
    url: string;
  }[];
  contacts: {
    label: string;
    url: string;
  }[];
  copyright: {
    id: string;
    en: string;
  };
}
