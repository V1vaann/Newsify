import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
      ['enclosure', 'enclosure', { keepArray: true }],
      ['image', 'image'],
      ['img', 'img'],
      ['og:image', 'ogImage'],
      ['twitter:image', 'twitterImage'],
      ['media:group', 'mediaGroup', { keepArray: true }],
      ['media:credit', 'mediaCredit', { keepArray: true }],
      ['media:description', 'mediaDescription', { keepArray: true }],
      ['media:title', 'mediaTitle', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
      ['media:status', 'mediaStatus', { keepArray: true }],
      ['media:price', 'mediaPrice', { keepArray: true }],
      ['media:license', 'mediaLicense', { keepArray: true }],
      ['media:subTitle', 'mediaSubTitle', { keepArray: true }],
      ['media:peerLink', 'mediaPeerLink', { keepArray: true }],
      ['media:rights', 'mediaRights', { keepArray: true }],
      ['media:scenes', 'mediaScenes', { keepArray: true }],
      ['media:location', 'mediaLocation', { keepArray: true }],
      ['media:player', 'mediaPlayer', { keepArray: true }],
      ['media:hash', 'mediaHash', { keepArray: true }],
      ['media:frame', 'mediaFrame', { keepArray: true }],
      ['media:adult', 'mediaAdult', { keepArray: true }],
      ['media:duration', 'mediaDuration', { keepArray: true }],
      ['media:keywords', 'mediaKeywords', { keepArray: true }],
      ['media:category', 'mediaCategory', { keepArray: true }],
      ['media:rating', 'mediaRating', { keepArray: true }],
      ['media:restriction', 'mediaRestriction', { keepArray: true }],
      ['media:community', 'mediaCommunity', { keepArray: true }],
      ['media:comments', 'mediaComments', { keepArray: true }],
      ['media:embed', 'mediaEmbed', { keepArray: true }],
      ['media:responses', 'mediaResponses', { keepArray: true }],
      ['media:backLinks', 'mediaBackLinks', { keepArray: true }],
    ],
  },
});

// RSS feed URLs for different categories
const RSS_FEEDS = {
  general: [
    'http://feeds.bbci.co.uk/news/rss.xml',
    'https://www.hindustantimes.com/feeds/rss/home',
    'https://www.ndtv.com/rss/feed',
    'https://www.thehindu.com/feeds/default.rss',
    'https://www.deccanherald.com/rss/feed.xml',
    'https://www.firstpost.com/feed',
    'https://www.livemint.com/rss/markets',
    'https://www.moneycontrol.com/rss/marketreports.xml',
    'https://www.news18.com/rss/india.xml',
  ],
  technology: [
    'https://www.hindustantimes.com/feeds/rss/technology',
    'https://www.firstpost.com/tech/feed',
    'https://www.gadgets360.com/rss/feed',
    'https://www.techradar.com/rss',
    'https://www.zdnet.com/news/rss.xml',
    'https://www.wired.com/feed/rss',
  ],
  sports: [
    'https://www.hindustantimes.com/feeds/rss/sports',
    'https://www.firstpost.com/sports/feed',
    'https://www.espncricinfo.com/rss/content/story/feeds/0.xml',
    'https://www.news18.com/rss/sports.xml',
    'https://www.deccanherald.com/rss/sports.xml',
    'https://www.thehindu.com/sport/feeds/default.rss',
  ],
  business: [
    'https://www.hindustantimes.com/feeds/rss/business',
    'https://www.firstpost.com/business/feed',
    'https://www.livemint.com/rss/markets',
    'https://www.moneycontrol.com/rss/business.xml',
    'https://www.thehindu.com/business/feeds/default.rss',
    'https://www.deccanherald.com/rss/business.xml',
    'https://www.news18.com/rss/business.xml',
  ],
  health: [
    'https://www.hindustantimes.com/feeds/rss/health',
    'https://www.firstpost.com/health/feed',
    'https://www.thehindu.com/sci-tech/health/feeds/default.rss',
    'https://www.deccanherald.com/rss/health.xml',
    'https://www.news18.com/rss/health.xml',
    'https://www.livemint.com/rss/health',
  ],
  entertainment: [
    'https://www.hindustantimes.com/feeds/rss/entertainment',
    'https://www.firstpost.com/entertainment/feed',
    'https://www.ndtv.com/rss/entertainment',
    'https://www.thehindu.com/entertainment/feeds/default.rss',
    'https://www.deccanherald.com/rss/entertainment.xml',
    'https://www.news18.com/rss/entertainment.xml',
    'https://www.livemint.com/rss/entertainment',
  ],
};

// Function to extract image URL from various possible sources
function extractImageUrl(item) {
  // Try different possible image sources in order of preference
  const possibleImageSources = [
    item.enclosure?.[0]?.url, // RSS enclosure
    item.mediaContent?.[0]?.$.url, // Media content
    item.mediaThumbnail?.[0]?.$.url, // Media thumbnail
    item.image, // Standard RSS image
    item.img, // Custom img field
    item.ogImage, // Open Graph image
    item.twitterImage, // Twitter image
    // Try to extract from content if no direct image is found
    item.content?.match(/<img[^>]+src="([^">]+)"/)?.[1],
    item.content?.match(/<img[^>]+src='([^'>]+)'/)?.[1],
  ];

  // Find the first valid image URL
  const imageUrl = possibleImageSources.find(url => 
    url && 
    (url.startsWith('http://') || url.startsWith('https://')) &&
    !url.includes('spacer.gif') && 
    !url.includes('pixel.gif')
  );

  return imageUrl || null;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase() || 'general';
    const search = searchParams.get('search')?.toLowerCase() || '';
    const limit = parseInt(searchParams.get('limit')) || 10;

    // Get RSS feeds for the requested category
    const feeds = RSS_FEEDS[category] || RSS_FEEDS.general;
    
    // Fetch and parse all feeds
    const feedPromises = feeds.map(async (feedUrl) => {
      try {
        const feed = await parser.parseURL(feedUrl);
        return feed.items;
      } catch (error) {
        console.error(`Error fetching feed ${feedUrl}:`, error);
        return [];
      }
    });

    const feedResults = await Promise.all(feedPromises);
    let allArticles = feedResults.flat();

    // Filter articles based on search query if provided
    if (search) {
      allArticles = allArticles.filter(article => 
        article.title.toLowerCase().includes(search) ||
        article.content?.toLowerCase().includes(search)
      );
    }

    // Sort articles by date and limit the number
    allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    allArticles = allArticles.slice(0, limit);

    // Clean and format the articles
    const formattedArticles = allArticles.map(article => ({
      title: article.title,
      summary: article.contentSnippet || article.content?.substring(0, 200) + '...',
      imageUrl: extractImageUrl(article),
      sourceUrl: article.link,
      publishDate: article.pubDate,
      source: article.source?.name || new URL(article.link).hostname,
    }));

    // Add cache control headers to prevent caching
    const headers = {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    };

    return NextResponse.json({
      success: true,
      articles: formattedArticles,
      total: formattedArticles.length,
      timestamp: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    }, { headers });

  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch news articles',
        message: error.message,
      },
      { status: 500 }
    );
  }
} 