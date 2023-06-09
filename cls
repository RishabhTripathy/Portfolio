warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 430f8aa..ac3bcc0 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -11,11 +11,13 @@[m
         "@testing-library/jest-dom": "^5.16.5",[m
         "@testing-library/react": "^13.4.0",[m
         "@testing-library/user-event": "^13.5.0",[m
[32m+[m[32m        "framer-motion": "^10.12.12",[m
         "react": "^18.2.0",[m
         "react-dom": "^18.2.0",[m
         "react-icons": "^4.6.0",[m
         "react-scripts": "5.0.1",[m
         "react-scroll": "^1.8.8",[m
[32m+[m[32m        "react-toastify": "^9.1.3",[m
         "web-vitals": "^2.1.4"[m
       },[m
       "devDependencies": {[m
[36m@@ -2139,6 +2141,21 @@[m
         "postcss-selector-parser": "^6.0.10"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@emotion/is-prop-valid": {[m
[32m+[m[32m      "version": "0.8.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-0.8.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@emotion/memoize": "0.7.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@emotion/memoize": {[m
[32m+[m[32m      "version": "0.7.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw==",[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
     "node_modules/@eslint/eslintrc": {[m
       "version": "1.3.3",[m
       "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.3.3.tgz",[m
[36m@@ -5647,6 +5664,14 @@[m
         "wrap-ansi": "^7.0.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/clsx": {[m
[32m+[m[32m      "version": "1.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clsx/-/clsx-1.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-EcR6r5a8bj6pu3ycsa/E/cKVGuTgZJZdsyUYHOksG/UHIiKfjxzRxYJpyVBwYaQeOvghal9fcc4PidlgzugAQg==",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/co": {[m
       "version": "4.6.0",[m
       "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",[m
[36m@@ -8195,6 +8220,29 @@[m
         "url": "https://www.patreon.com/infusion"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/framer-motion": {[m
[32m+[m[32m      "version": "10.12.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-10.12.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-DDCqp60U6hR7aUrXj/BXc/t0Sd/U4ep6w/NZQkw898K+u7s+Vv/P8yxq4WTNA86kU9QCsqOgn1Qhz2DpYK0Oag==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "tslib": "^2.4.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "optionalDependencies": {[m
[32m+[m[32m        "@emotion/is-prop-valid": "^0.8.2"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "react": "^18.0.0",[m
[32m+[m[32m        "react-dom": "^18.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependenciesMeta": {[m
[32m+[m[32m        "react": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        },[m
[32m+[m[32m        "react-dom": {[m
[32m+[m[32m          "optional": true[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/fresh": {[m
       "version": "0.5.2",[m
       "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",[m
[36m@@ -14258,6 +14306,18 @@[m
         "react-dom": "^15.5.4 || ^16.0.0 || ^17.0.0 || ^18.0.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/react-toastify": {[m
[32m+[m[32m      "version": "9.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-toastify/-/react-toastify-9.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-fPfb8ghtn/XMxw3LkxQBk3IyagNpF/LIKjOBflbexr2AWxAH1MJgvnESwEwBn9liLFXgTKWgBSdZpw9m4OTHTg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "clsx": "^1.1.1"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "react": ">=16",[m
[32m+[m[32m        "react-dom": ">=16"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/read-cache": {[m
       "version": "1.0.0",[m
       "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",[m
[36m@@ -18385,6 +18445,21 @@[m
       "integrity": "sha512-IkpVW/ehM1hWKln4fCA3NzJU8KwD+kIOvPZA4cqxoJHtE21CCzjyp+Kxbu0i5I4tBNOlXPL9mjwnWlL0VEG4Fg==",[m
       "requires": {}[m
     },[m
[32m+[m[32m    "@emotion/is-prop-valid": {[m
[32m+[m[32m      "version": "0.8.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-0.8.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@emotion/memoize": "0.7.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@emotion/memoize": {[m
[32m+[m[32m      "version": "0.7.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw==",[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
     "@eslint/eslintrc": {[m
       "version": "1.3.3",[m
       "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.3.3.tgz",[m
[36m@@ -20988,6 +21063,11 @@[m
         "wrap-ansi": "^7.0.0"[m
       }[m
     },[m
[32m+[m[32m    "clsx": {[m
[32m+[m[32m      "version": "1.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/clsx/-/clsx-1.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-EcR6r5a8bj6pu3ycsa/E/cKVGuTgZJZdsyUYHOksG/UHIiKfjxzRxYJpyVBwYaQeOvghal9fcc4PidlgzugAQg=="[m
[32m+[m[32m    },[m
     "co": {[m
       "version": "4.6.0",[m
       "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",[m
[36m@@ -22851,6 +22931,15 @@[m
       "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.2.0.tgz",[m
       "integrity": "sha512-MhLuK+2gUcnZe8ZHlaaINnQLl0xRIGRfcGk2yl8xoQAfHrSsL3rYu6FCmBdkdbhc9EPlwyGHewaRsvwRMJtAlA=="[m
     },[m
[32m+[m[32m    "framer-motion": {[m
[32m+[m[32m      "version": "10.12.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-10.12.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-DDCqp60U6hR7aUrXj/BXc/t0Sd/U4ep6w/NZQkw898K+u7s+Vv/P8yxq4WTNA86kU9QCsqOgn1Qhz2DpYK0Oag==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@emotion/is-prop-valid": "^0.8.2",[m
[32m+[m[32m        "tslib": "^2.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "fresh": {[m
       "version": "0.5.2",[m
       "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",[m
[36m@@ -27042,6 +27131,14 @@[m
         "prop-types": "^15.7.2"[m
       }[m
     },[m
[32m+[m[32m    "react-toastify": {[m
[32m+[m[32m      "version": "9.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-toastify/-/react-toastify-9.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-fPfb8ghtn/XMxw3LkxQBk3IyagNpF/LIKjOBflbexr2AWxAH1MJgvnESwEwBn9liLFXgTKWgBSdZpw9m4OTHTg==",[m
[3