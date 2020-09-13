/**
 * This file will contain all the  calls related to feed / repos to the server
 *
 */
import http from './http';

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github`;

export const getRepos = async (
  pageNo,
  searchRepo,
  languageList,
  org,
  sortMethod,
  sortOrder
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = '';

      if (languageList.length !== 0 && searchRepo !== '' && org !== 'All')
        query = `${searchRepo} in:name language:${languageList[0]} org:${org}`;
      // When Search Field and Language List are not Default
      else if (languageList.length !== 0 && searchRepo !== '')
        query = `${searchRepo} in:name language:${languageList.toString()}`;
      // When Search Field and Organisation are not Default
      else if (org !== 'All' && searchRepo !== '')
        query = `${searchRepo} in:name org:${org}`;
      // When Language List and Organisation are not Default
      else if (languageList.length !== 0 && org !== 'All')
        query = `language:${languageList[0]} org:${org}`;
      // When Only Language List is Not default
      else if (languageList.length !== 0) query = `language:${languageList[0]}`;
      // When Only Search Field is Not default
      else if (searchRepo !== '') query = `${searchRepo} in:name`;
      // When Only Organisation is Not default
      else if (org !== 'All') query = `org:${org}`;

      let url = `${baseURL}/repositories?page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;
      if (query !== '')
        url = `${baseURL}/repositories?page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}&query=${query}`;

      const res = await http.get(url);
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const getIssues = async (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(
        `${baseURL}/issues/${name.split(' ')[0]}/${name.split(' ')[1]}`
      );
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const getPulls = async (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(
        `${baseURL}/pulls/${name.split(' ')[0]}/${name.split(' ')[1]}`
      );
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

// Languages and Organisation List

export const getLanguages = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const languages = [
        'Assembly',
        'C',
        'CPP',
        'CSS',
        'Dart',
        'Go',
        'HTML',
        'Java',
        'JavaScript',
        'Julia',
        'Jupyter Notebook',
        'Kotlin',
        'Lua',
        'OCaml',
        'Objective-C',
        'PHP',
        'Python',
        'R',
        'Ruby',
        'Rust',
        'Scala',
        'Shell',
        'Swift',
        'TeX',
        'TypeScript',
        'Vim script'
      ];
      resolve(languages);
    } catch (error) {
      reject(error);
    }
  });
};

export const getOrganisationList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const organisations = [
        'abseil',
        'angular',
        'ansible',
        'ant-design',
        'apache',
        'apple',
        'ARMmbed',
        'Automattic',
        'bazelbuild',
        'bitcoin',
        'brianchandotcom',
        'bulletphysics',
        'cartographer-project',
        'census-instrumentation',
        'ceph',
        'chromium',
        'cms-sw',
        'cockroachdb',
        'CocoaPods',
        'dart-lang',
        'deepmind',
        'DefinitelyTyped',
        'dimagi',
        'dotnet',
        'eclipse',
        'edx',
        'elastic',
        'electron',
        'facebook',
        'fastlane',
        'firebase',
        'firehol',
        'flutter',
        'freeCodeCamp',
        'gatsbyjs',
        'gentoo',
        'godotengine',
        'golang',
        'google',
        'googlecreativelab',
        'googledatalab',
        'googlefonts',
        'hashicorp',
        'home-assistant',
        'Homebrew',
        'ionic-team',
        'istio',
        'JanusGraph',
        'Jigsaw-Code',
        'jlippold',
        'jlord',
        'joomla',
        'JuliaLang',
        'keybase',
        'kubeflow',
        'kubernetes',
        'kythe',
        'laravel',
        'ManageIQ',
        'microsoft',
        'moby',
        'mui-org',
        'nextcloud',
        'NixOS',
        'nodejs',
        'odoo',
        'openshift',
        'openthread',
        'owncloud',
        'pandas-dev',
        'phalcon',
        'Polymer',
        'python',
        'pytorch',
        'rails',
        'rust-lang',
        'saltstack',
        'scikit-learn',
        'servo',
        'spinnaker',
        'symfony',
        'tensorflow',
        'tgstation',
        'upspin',
        'verilylifesciences',
        'vitessio',
        'zephyrproject-rtos',
        'zulip',
        'zxing'
      ];

      resolve(organisations);
    } catch (error) {
      reject(error);
    }
  });
};

export const getStarredRepos = async (pageNo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.get(`${baseURL}/starred?page=${pageNo}`);
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const starRepo = async (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.put(`${baseURL}/starred/${name}`);
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const unStarRepo = async (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.delete(`${baseURL}/starred/${name}`);
      if (res.status === 200) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
