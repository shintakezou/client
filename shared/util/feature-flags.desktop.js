// @flow

import getenv from 'getenv'
import type {FeatureKeys, FeatureFlags} from './feature-flags'

// To enable a feature, include it in the environment variable KEYBASE_FEATURES.
// For example, KEYBASE_FEATURES=tracker2,login,awesomefeature

let features = getenv.array('KEYBASE_FEATURES', 'string', '')

const featureOn = (key: FeatureKeys, includeAdmin: boolean = false) => ( // eslint-disable-line space-infix-ops
  features.includes(key) || (includeAdmin && featureOn('admin'))
)

const ff: FeatureFlags = {
  admin: featureOn('admin'),
  chatAdminOnly: featureOn('chatAdminOnly', true),
  mobileAppsExist: featureOn('mobileAppsExist'),
  plansEnabled: featureOn('plansEnabled'),
  recentFilesEnabled: featureOn('recentFilesEnabled'),
  tabPeopleEnabled: featureOn('tabPeopleEnabled'),
}

if (__DEV__) {
  console.log('Features', ff)
}

export default ff
