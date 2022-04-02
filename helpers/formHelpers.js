import moment from "moment";

export const formatValues = (values) => {
  return {
    news: {
      headline: values.headline,
      date: new Date(values.date).toISOString(),
      tags: values.newTags
        ? values.tags.concat(values.newTags.map((newtag) => newtag.name))
        : values.tags,
      publication: values.publication,
      text: values.text,
    },
  };
};

export const editStringDate = (date) => {
  let parseDate = date.split(/[/,]/);
  parseDate = `${parseDate[2]}-${parseDate[1]}-${parseDate[0]}T${moment(
    parseDate[3],
    " hh:mm a"
  ).format("HH:mm")}`;
  return parseDate;
};
