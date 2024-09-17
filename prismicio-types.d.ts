// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *About → Personal Information*
 */
export interface AboutDocumentDataPersonalInformationItem {
  /**
   * Personal Information Field field in *About → Personal Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.personal_information[].personal_information_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  personal_information_field: prismic.RichTextField;
}

/**
 * Item in *About → Contact Information*
 */
export interface AboutDocumentDataContactInformationItem {
  /**
   * Contact Information Field field in *About → Contact Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.contact_information[].contact_information_field
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_information_field: prismic.RichTextField;
}

/**
 * Item in *About → Education Information*
 */
export interface AboutDocumentDataEducationInformationItem {
  /**
   * Education Date field in *About → Education Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education_information[].education_date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  education_date: prismic.RichTextField;

  /**
   * Education Type field in *About → Education Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education_information[].education_type
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  education_type: prismic.RichTextField;
}

/**
 * Item in *About → Award Information*
 */
export interface AboutDocumentDataAwardInformationItem {
  /**
   * Award Date field in *About → Award Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.award_information[].award_date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  award_date: prismic.RichTextField;

  /**
   * Award Type field in *About → Award Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.award_information[].award_type
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  award_type: prismic.RichTextField;
}

/**
 * Item in *About → Residency Information*
 */
export interface AboutDocumentDataResidencyInformationItem {
  /**
   * Residency Date field in *About → Residency Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.residency_information[].residency_date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  residency_date: prismic.RichTextField;

  /**
   * Residency Type field in *About → Residency Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.residency_information[].residency_type
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  residency_type: prismic.RichTextField;
}

/**
 * Item in *About → Extra Information*
 */
export interface AboutDocumentDataExtraInformationItem {
  /**
   * Extra Information Text field in *About → Extra Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.extra_information[].extra_information_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  extra_information_text: prismic.RichTextField;

  /**
   * Extra Information Link Text field in *About → Extra Information*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.extra_information[].extra_information_link_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  extra_information_link_text: prismic.RichTextField;

  /**
   * Extra Information Link field in *About → Extra Information*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.extra_information[].extra_information_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  extra_information_link: prismic.LinkField;
}

/**
 * Item in *About → Show Year*
 */
export interface AboutDocumentDataShowYearItem {
  /**
   * Year field in *About → Show Year*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.show_year[].year
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  year: prismic.RichTextField;

  /**
   * Shows field in *About → Show Year*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.show_year[].shows
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  shows: prismic.RichTextField;
}

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * CV Title field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.cv_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cv_title: prismic.RichTextField;

  /**
   * Personal Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.personal_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  personal_information: prismic.GroupField<
    Simplify<AboutDocumentDataPersonalInformationItem>
  >;

  /**
   * Contact Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.contact_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact_information: prismic.GroupField<
    Simplify<AboutDocumentDataContactInformationItem>
  >;

  /**
   * Education Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.education_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  education_information: prismic.GroupField<
    Simplify<AboutDocumentDataEducationInformationItem>
  >;

  /**
   * Award Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.award_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  award_information: prismic.GroupField<
    Simplify<AboutDocumentDataAwardInformationItem>
  >;

  /**
   * Residency Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.residency_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  residency_information: prismic.GroupField<
    Simplify<AboutDocumentDataResidencyInformationItem>
  >;

  /**
   * Extra Information field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.extra_information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  extra_information: prismic.GroupField<
    Simplify<AboutDocumentDataExtraInformationItem>
  >;

  /**
   * Shows Title field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.shows_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  shows_title: prismic.RichTextField;

  /**
   * Show Year field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.show_year[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  show_year: prismic.GroupField<Simplify<AboutDocumentDataShowYearItem>>;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Content for Main Image documents
 */
interface MainImageDocumentData {
  /**
   * Main Image field in *Main Image*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: main_image.main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;
}

/**
 * Main Image document from Prismic
 *
 * - **API ID**: `main_image`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainImageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainImageDocumentData>,
    "main_image",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *project → Images*
 */
export interface ProjectDocumentDataImagesItem {
  /**
   * Project Image field in *project → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.images[].project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;
}

/**
 * Item in *project → Exhibition*
 */
export interface ProjectDocumentDataExhibitionItem {
  /**
   * place field in *project → Exhibition*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Ort der Ausstellung
   * - **API ID Path**: project.exhibition[].place
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  place: prismic.RichTextField;

  /**
   * date field in *project → Exhibition*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Datum der Ausstellung
   * - **API ID Path**: project.exhibition[].date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  date: prismic.RichTextField;
}

type ProjectDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for project documents
 */
interface ProjectDocumentData {
  /**
   * index field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.index
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  index: prismic.KeyTextField;

  /**
   * Project Title field in *project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Title on Project Page
   * - **API ID Path**: project.project_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.RichTextField;

  /**
   * Project Name field in *project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: For the list on Projects
   * - **API ID Path**: project.project_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_name: prismic.RichTextField;

  /**
   * project_addon field in *project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: (with Collectiv Chuglu)
   * - **API ID Path**: project.project_addon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_addon: prismic.RichTextField;

  /**
   * Project Date field in *project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_date: prismic.RichTextField;

  /**
   * Main Image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Hover Image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.hover_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hover_image: prismic.ImageField<never>;

  /**
   * Images field in *project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<ProjectDocumentDataImagesItem>>;

  /**
   * Project Type field in *project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Sculpture etc
   * - **API ID Path**: project.project_type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_type: prismic.RichTextField;

  /**
   * Exhibition field in *project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.exhibition[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  exhibition: prismic.GroupField<Simplify<ProjectDocumentDataExhibitionItem>>;

  /**
   * Slice Zone field in *project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * logo field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo: prismic.LinkField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | MainImageDocument
  | PageDocument
  | ProjectDocument
  | ProjectsDocument
  | SettingsDocument;

/**
 * Primary content in *TextBlock → Default → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Textblock field in *TextBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.default.primary.textblock
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textblock: prismic.KeyTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

/**
 * Primary content in *YearShowSlice → Default → Primary*
 */
export interface YearShowSliceSliceDefaultPrimary {
  /**
   * gdf field in *YearShowSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: year_show_slice.default.primary.gdf
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  gdf: prismic.RichTextField;

  /**
   * asdf field in *YearShowSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: year_show_slice.default.primary.asdf
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  asdf: prismic.RichTextField;
}

/**
 * Default variation for YearShowSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type YearShowSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<YearShowSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *YearShowSlice*
 */
type YearShowSliceSliceVariation = YearShowSliceSliceDefault;

/**
 * YearShowSlice Shared Slice
 *
 * - **API ID**: `year_show_slice`
 * - **Description**: YearShowSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type YearShowSliceSlice = prismic.SharedSlice<
  "year_show_slice",
  YearShowSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataPersonalInformationItem,
      AboutDocumentDataContactInformationItem,
      AboutDocumentDataEducationInformationItem,
      AboutDocumentDataAwardInformationItem,
      AboutDocumentDataResidencyInformationItem,
      AboutDocumentDataExtraInformationItem,
      AboutDocumentDataShowYearItem,
      AboutDocumentDataSlicesSlice,
      MainImageDocument,
      MainImageDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataImagesItem,
      ProjectDocumentDataExhibitionItem,
      ProjectDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
      YearShowSliceSlice,
      YearShowSliceSliceDefaultPrimary,
      YearShowSliceSliceVariation,
      YearShowSliceSliceDefault,
    };
  }
}
