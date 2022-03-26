import { format } from "date-fns";

export const formatValues = (values) => {
  return {
    news: {
      headline: values.headline,
      date: format(new Date(values.date), "yyyy-MM-dd HH:mm:ssx"),
      tags: values.newTags
        ? values.tags.concat(values.newTags.map((newtag) => newtag.name))
        : values.tags,
      publication: values.publication,
      text: values.text,
    },
  };
};
