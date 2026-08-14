import { contentApi } from "../api/content.js";

import { skinTypes } from "../data/skinTypes.js";
import { quizTones, quizUndertones, quizSkinTypes } from "../data/skinQuiz.js";
import { magazineTabs, featuredArticle, latestArticles } from "../data/magazine.js";
import { guideTopics, mostReadArticles } from "../data/guide.js";

import { withFallback } from "./mock.js";

export const skinTypesMock = skinTypes;
export const skinQuizMock = {
  tones: quizTones,
  undertones: quizUndertones,
  skinTypes: quizSkinTypes,
};
export const magazineTabsMock = magazineTabs;
export const featuredArticleMock = featuredArticle;
export const latestArticlesMock = latestArticles;
export const guideTopicsMock = guideTopics;
export const mostReadArticlesMock = mostReadArticles;

export const getSkinTypes = () =>
  withFallback(() => contentApi.getSkinTypes(), skinTypes);

export const getSkinQuizData = () =>
  withFallback(
    () => contentApi.getSkinQuizData(),
    { tones: quizTones, undertones: quizUndertones, skinTypes: quizSkinTypes }
  );

export const getMagazineTabs = () =>
  withFallback(() => contentApi.getMagazineTabs(), magazineTabs);

export const getFeaturedArticle = () =>
  withFallback(() => contentApi.getFeaturedArticle(), featuredArticle);

export const getLatestArticles = () =>
  withFallback(() => contentApi.getLatestArticles(), latestArticles);

export const getGuideTopics = () =>
  withFallback(() => contentApi.getGuideTopics(), guideTopics);

export const getMostReadArticles = () =>
  withFallback(() => contentApi.getMostReadArticles(), mostReadArticles);

export const contentService = {
  getSkinTypes,
  getSkinQuizData,
  getMagazineTabs,
  getFeaturedArticle,
  getLatestArticles,
  getGuideTopics,
  getMostReadArticles,
};

export default contentService;