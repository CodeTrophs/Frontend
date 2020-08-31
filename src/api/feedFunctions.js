import Axios from 'axios';

import * as authFunctions from './authFunctions';


/* ========================================================================================================================== 
                                                  Function to Get Repos for Feed Page 
      ========================================================================================================================= */


export async function getRepos(
  pageNo,
  searchRepo,
  languageList,
  org,
  sortMethod,
  sortOrder) {

  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return { status: 401, message: 'Authentication Failed. Please login again !' };
  }

  /* ========================================================================================================================== 
                                                  Build the queries here 
      ========================================================================================================================= */
  let query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  // When All 3 fields are not default
  if (languageList.length !== 0 && searchRepo !== '' && org !== 'All') {
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`${searchRepo  } in:name language:${ languageList[0]} org:${org}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  }
  // When Search Field and Language List are not Default
  else if (languageList.length !== 0 && searchRepo !== '')
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`${searchRepo  } in:name language:${  languageList.toString()}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  // When Search Field and Organisation are not Default
  else if (org !== 'All' && searchRepo !== '')
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`${searchRepo  } in:name org:${  org}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  // When Language List and Organisation are not Default
  else if (languageList.length !== 0 && org !== 'All')
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`language:${  languageList.toString()  } org:${  org}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;
  // When Only Language List is Not default
  else if (languageList.length !== 0)
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`language:${  languageList.join('language:')}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  // When Only Search Field is Not default
  else if (searchRepo !== '')
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`${searchRepo  } in:name`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;
  // When Only Organisation is Not default
  else if (org !== 'All')
    query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/repositories?&query=${`org:${org}`}&page=${pageNo}&per_page=20&sort=${sortMethod}&order=${sortOrder}`;

  return Axios.get(
    query,
    {
      headers: {
        Authorization: `Bearer ${verificationResult.token}`
      }
    }
  ).then((res) => {
    return { status: 200, data: res.data.data.items, hasNextPage : res.data.hasNextPage};
  }).catch((err) => {
    return { status: err.response.data.status, message: err.response.data.message };
  });
}


export async function getLanguages() {
  const languages = [
    "Assembly","C","CPP","CSS","Dart","Go","HTML","Java","JavaScript","Julia","Jupyter Notebook","Kotlin",
"Lua","OCaml","Objective-C","PHP","Python","R","Ruby","Rust","Scala","Shell",
"Swift","TeX","TypeScript","Vim script"
  ];
  return languages;
}


export async function getOrganisationList() {

  const organisations = 
  ["abseil", "angular", "ansible", "ant-design", "apache", "apple", "ARMmbed", "Automattic", "bazelbuild", "bitcoin", "brianchandotcom", "bulletphysics", "cartographer-project", "census-instrumentation", "ceph", "chromium", "cms-sw", "cockroachdb", "CocoaPods", "dart-lang", "deepmind", "DefinitelyTyped", "dimagi", "dotnet", "eclipse", "edx", "elastic", "electron", "facebook", "fastlane", "firebase", "firehol", "flutter", "freeCodeCamp", "gatsbyjs", "gentoo", "godotengine", "golang", "google", "googlecreativelab", "googledatalab", "googlefonts", "hashicorp", "home-assistant", "Homebrew", "ionic-team", "istio", "JanusGraph", "Jigsaw-Code", "jlippold", "jlord", "joomla", "JuliaLang", "keybase", "kubeflow", "kubernetes", "kythe", "laravel", "ManageIQ", "microsoft", "moby", "mui-org", "nextcloud", "NixOS", "nodejs", "odoo", "openshift", "openthread", "owncloud", "pandas-dev", "phalcon", "Polymer", "python", "pytorch", "rails", "rust-lang", "saltstack", "scikit-learn", "servo", "spinnaker", "symfony", "tensorflow", "tgstation", "upspin", "verilylifesciences", "vitessio", "zephyrproject-rtos", "zulip", "zxing"]
  return organisations;
}


export async function getIssues(name) {
  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return { status: 401, message: 'Authentication Failed. Please login again !' };
  }
  
  const query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/issues/${name.split(' ')[0]}/${name.split(' ')[1]}`;
  return Axios.get(
    query,
    {
      headers: {
        Authorization: `Bearer ${verificationResult.token}`
      }
    }
  ).then((res) => {
    const data = res.data !== '' ? res.data.data : []; 
    return {status:200, data};
  }).catch((err) => {
    return { status: err.response.data.status, message: err.response.data.message };
  });
}



export async function getPulls(name) {
  const verificationResult = authFunctions.verifySecuredToken(localStorage.getItem('osc-app-token'));
  if (verificationResult === null) {
    return { status: 401, message: 'Authentication Failed. Please login again !' };
  }

  const query = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/github/pulls/${name.split(' ')[0]}/${name.split(' ')[1]}`;
  return Axios.get(
    query,
    {
      headers: {
        Authorization: `Bearer ${verificationResult.token}`
      }
    }
  ).then((res) => {
    const data = res.data !== '' ? res.data.data : [];
    return { status: 200, data };
  }).catch((err) => {
    return { status: err.response.data.status, message: err.response.data.message };
  });
}
