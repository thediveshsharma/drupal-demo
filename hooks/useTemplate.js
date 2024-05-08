import dynamic from "next/dynamic";
import { useMemo } from "react";
import {
  ABOUT_US_TEMPLATE,
  MIGRATE_TEMPLATE,
  MIGRATE_COUNTRY_TEMPLATE,
  EXPRESS_ENTRY_TEMPLATE,
  VISA_TEMPLATE,
  HOME_TEMPLATE,
  COACHING_TEMPLATE,
  COACHING_COURSE_TEMPLATE,
  CONTACT_US_TEMPLATE,
  SALARIES_TEMPLATE,
  WHY_CHOOSE_WORK_TEMPLATE,
  WHY_CHOOSE_US_TEMPLATE,
  WHY_CHOOSE_STUDY_TEMPLATE,
  WHY_CHOOSE_MIGRATE_TEMPLATE,
  WHY_CHOOSE_INVEST_TEMPLATE,
  WEBINAR_TEMPLATE,
  RESOURCES_TEMPLATE,
  CITY_TEMPLATE,
  PRESS_AND_NEWS_TEMPLATE,
  REGISTER_FREE_DEMO_TEMPLATE,
  RESUME_WRITING_SERVICES_TEMPLATE,
  STUDENT_EDUCATION_LOAN_TEMPLATE,
  TERMS_CONDITIONS_TEMPLATE,
  TESTIMONIAL_TEMPLATE,
  TESTIMONIALS_REVIEWS_SUCCESS_STORIES_TEMPLATE,
  CONCIERGE_TEMPLATE,
  VISA_SUCCESS_STORIES_TEMPLATE,
  CAREERS_TEMPLATE,
  VISA_INVEST_COUNTRY_TEMPLATE,
  VISA_STUDY_COUNTRY_TEMPLATE,
  VISA_WORK_COUNTRY_TEMPLATE,
  VISA_VISIT_COUNTRY_TEMPLATE,
  VISA_STUDY_TEMPLATE,
  VISA_WORK_TEMPLATE,
  VISA_INVEST_TEMPLATE,
  CUSTOMER_REVIEWS_TEMPLATE,
  FREE_ASSESSMENT_TEMPLATE,
  FREE_ASSESSMENT_AUSTRALIA_TEMPLATE,
  FREE_ASSESSMENT_SASKATCHEWAN_TEMPLATE,
  FREE_ASSESSMENT_UK_TEMPLATE,
  FREE_ASSESSMENT_QUEBEC_TEMPLATE,
  FREE_ASSESSMENT_GERMANY_TEMPLATE,
  FREE_ASSESSMENT_CANADA_TEMPLATE,
  PROFESSIONAL_SERVICES_TEMPLATE,
  PROFESSIONAL_SERVICES_DETAILS_TEMPLATE,
} from "../utils/templateConstants";

const MigrateTemplate = dynamic(() =>
  import("../component/templates/migrateTemplate")
);
const MigrateCountryTemplate = dynamic(() =>
  import("../component/templates/migrateCountryTemplate")
);
const VisaTemplate = dynamic(() =>
  import("../component/templates/visaTemplate")
);
const CoachingTemplate = dynamic(() =>
  import("../component/templates/coachingTemplate")
);
const HomeTemplate = dynamic(() =>
  import("../component/templates/homeTemplate")
);
const ExpressEntryTemplate = dynamic(() =>
  import("../component/templates/expressEntryTemplate")
);
const CoachingCourseTemplate = dynamic(() =>
  import("../component/templates/coachingCourseTemplate")
);
const ContactUsTemplate = dynamic(() =>
  import("../component/templates/contactUsTemplate")
);
const SalariesTemplate = dynamic(() =>
  import("../component/templates/salariesTemplate")
);
const WhyChooseWorkTemplate = dynamic(() =>
  import("../component/templates/whyChooseWorkTemplate")
);
const WhyChooseUsTemplate = dynamic(() =>
  import("../component/templates/whyChooseUsTemplate")
);
const WhyChooseStudyTemplate = dynamic(() =>
  import("../component/templates/whyChooseStudyTemplate")
);
const WhyChooseMigrateTemplate = dynamic(() =>
  import("../component/templates/whyChooseMigrateTemplate")
);
const WhyChooseInvestTemplate = dynamic(() =>
  import("../component/templates/whyChooseInvestTemplate")
);
const WebinarTemplate = dynamic(() =>
  import("../component/templates/webinarTemplate")
);
const ResourcesTemplate = dynamic(() =>
  import("../component/templates/resourcesTemplate")
);
const ChennaiCityTemplate = dynamic(() =>
  import("../component/templates/chennaiCityTemplate")
);
const PressAndNewsTemplate = dynamic(() =>
  import("../component/templates/pressAndNewsTemplate")
);
const RegisterFreeDemoTemplate = dynamic(() =>
  import("../component/templates/registerFreeDemoTemplate")
);
const ResumeWritingServicesTemplate = dynamic(() =>
  import("../component/templates/resumeWritingServicesTemplate")
);
const StudentEducationLoanTemplate = dynamic(() =>
  import("../component/templates/studentEducationLoanTemplate")
);
const TermsConditionsTemplate = dynamic(() =>
  import("../component/templates/termsConditionsTemplate")
);
const TestimonialTemplate = dynamic(() =>
  import("../component/templates/testimonialTemplate")
);
const TestimonialsReviewsSuccessStoriesTemplate = dynamic(() =>
  import("../component/templates/testimonialsReviewsSuccessStoriesTemplate")
);
const ConciergeTemplate = dynamic(() =>
  import("../component/templates/conciergeTemplate")
);
const VisaSuccessStoriesTemplate = dynamic(() =>
  import("../component/templates/visaSuccessStoriesTemplate")
);
const CareersTemplate = dynamic(() =>
  import("../component/templates/careersTemplate")
);
const VisaInvestCountryTemplate = dynamic(() =>
  import("../component/templates/visaInvestCountryTemplate")
);
const VisaStudyCountryTemplate = dynamic(() =>
  import("../component/templates/visaStudyCountryTemplate")
);
const VisaWorkCountryTemplate = dynamic(() =>
  import("../component/templates/visaWorkCountryTemplate")
);
const VisaVisitCountryTemplate = dynamic(() =>
  import("../component/templates/visaVisitCountryTemplate")
);
const VisaStudyTemplate = dynamic(() =>
  import("../component/templates/visaStudyTemplate")
);
const VisaWorkTemplate = dynamic(() =>
  import("../component/templates/visaWorkTemplate")
);
const VisaInvestTemplate = dynamic(() =>
  import("../component/templates/visaInvestTemplate")
);
const FreeAssessmentTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentTemplate")
);
const AboutUsTemplate = dynamic(() =>
  import("../component/templates/aboutUsTemplate")
);
const CustomerReviewsTemplate = dynamic(() =>
  import("../component/templates/customerReviewsTemplate")
);
const FreeAssessmentAustraliaTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentAustraliaTemplate")
);
const FreeAssessmentCanadaTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentCanadaTemplate")
);
const FreeAssessmentGermanyTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentGermanyTemplate")
);
const FreeAssessmentUkTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentUkTemplate")
);
const FreeAssessmentQuebecTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentQuebecTemplate")
);
const FreeAssessmentSaskatchewanTemplate = dynamic(() =>
  import("../component/templates/freeAssessmentSaskatchewanTemplate")
);
const ProfessionalServicesTemplate = dynamic(() =>
  import("../component/templates/professionalServicesTemplate")
);
const ProfessionalServicesDetailsTemplate = dynamic(() =>
  import("../component/templates/professionalServicesDetailsTemplate")
);

const returnTemplate = (template) => {
  switch (template) {
    case ABOUT_US_TEMPLATE:
      return AboutUsTemplate;
    case MIGRATE_TEMPLATE:
      return MigrateTemplate;
    case MIGRATE_COUNTRY_TEMPLATE:
      return MigrateCountryTemplate;
    case EXPRESS_ENTRY_TEMPLATE:
      return ExpressEntryTemplate;
    case VISA_TEMPLATE:
      return VisaTemplate;
    case HOME_TEMPLATE:
      return HomeTemplate;
    case COACHING_TEMPLATE:
      return CoachingTemplate;
    case COACHING_COURSE_TEMPLATE:
      return CoachingCourseTemplate;
    case CONTACT_US_TEMPLATE:
      return ContactUsTemplate;
    case SALARIES_TEMPLATE:
      return SalariesTemplate;
    case WHY_CHOOSE_WORK_TEMPLATE:
      return WhyChooseWorkTemplate;
    case WHY_CHOOSE_US_TEMPLATE:
      return WhyChooseUsTemplate;
    case WHY_CHOOSE_STUDY_TEMPLATE:
      return WhyChooseStudyTemplate;
    case WHY_CHOOSE_MIGRATE_TEMPLATE:
      return WhyChooseMigrateTemplate;
    case WHY_CHOOSE_INVEST_TEMPLATE:
      return WhyChooseInvestTemplate;
    case WEBINAR_TEMPLATE:
      return WebinarTemplate;
    case RESOURCES_TEMPLATE:
      return ResourcesTemplate;
    case CITY_TEMPLATE:
      return ChennaiCityTemplate;
    case PRESS_AND_NEWS_TEMPLATE:
      return PressAndNewsTemplate;
    case REGISTER_FREE_DEMO_TEMPLATE:
      return RegisterFreeDemoTemplate;
    case RESUME_WRITING_SERVICES_TEMPLATE:
      return ResumeWritingServicesTemplate;
    case STUDENT_EDUCATION_LOAN_TEMPLATE:
      return StudentEducationLoanTemplate;
    case TERMS_CONDITIONS_TEMPLATE:
      return TermsConditionsTemplate;
    case TESTIMONIAL_TEMPLATE:
      return TestimonialTemplate;
    case TESTIMONIALS_REVIEWS_SUCCESS_STORIES_TEMPLATE:
      return TestimonialsReviewsSuccessStoriesTemplate;
    case CONCIERGE_TEMPLATE:
      return ConciergeTemplate;
    case VISA_SUCCESS_STORIES_TEMPLATE:
      return VisaSuccessStoriesTemplate;
    case CAREERS_TEMPLATE:
      return CareersTemplate;
    case VISA_INVEST_COUNTRY_TEMPLATE:
      return VisaInvestCountryTemplate;
    case VISA_STUDY_COUNTRY_TEMPLATE:
      return VisaStudyCountryTemplate;
    case VISA_WORK_COUNTRY_TEMPLATE:
      return VisaWorkCountryTemplate;
    case VISA_VISIT_COUNTRY_TEMPLATE:
      return VisaVisitCountryTemplate;
    case VISA_STUDY_TEMPLATE:
      return VisaStudyTemplate;
    case VISA_WORK_TEMPLATE:
      return VisaWorkTemplate;
    case VISA_INVEST_TEMPLATE:
      return VisaInvestTemplate;
    case CUSTOMER_REVIEWS_TEMPLATE:
      return CustomerReviewsTemplate;
    case FREE_ASSESSMENT_TEMPLATE:
      return FreeAssessmentTemplate;
    case FREE_ASSESSMENT_AUSTRALIA_TEMPLATE:
      return FreeAssessmentAustraliaTemplate;
    case FREE_ASSESSMENT_SASKATCHEWAN_TEMPLATE:
      return FreeAssessmentSaskatchewanTemplate;
    case FREE_ASSESSMENT_UK_TEMPLATE:
      return FreeAssessmentUkTemplate;
    case FREE_ASSESSMENT_QUEBEC_TEMPLATE:
      return FreeAssessmentQuebecTemplate;
    case FREE_ASSESSMENT_GERMANY_TEMPLATE:
      return FreeAssessmentGermanyTemplate;
    case FREE_ASSESSMENT_CANADA_TEMPLATE:
      return FreeAssessmentCanadaTemplate;
    case PROFESSIONAL_SERVICES_TEMPLATE:
      return ProfessionalServicesTemplate;
    case PROFESSIONAL_SERVICES_DETAILS_TEMPLATE:
      return ProfessionalServicesDetailsTemplate;
    default:
      return HomeTemplate;
  }
};

const useTemplate = ({ template }) => {
  const Component = returnTemplate(template);
  const isError = !Component;
  return useMemo(
    () => ({ Component, isError, templateName: template }),
    [template]
  );
};

export default useTemplate;
