import { useTranslation } from "next-i18next";
import classes from "./faq.module.css";
import FAQElement from "./faq_element";

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <div id="FAQ" className={classes.container}>
      <h1 className={classes.header}>{t("navbar:faq")}</h1>
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
      <FAQElement
        question="How do we collect stats?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
      />
    </div>
  );
}
