#!/bin/bash
 
# if [[ $VERCEL_GIT_COMMIT_REF == "develop"  ]] ; then 
#   echo "This is our main branch"
#   npm run tsc && npm run build:develop
# elif [[ $VERCEL_GIT_COMMIT_REF == "qa-testing"  ]] ; then 
#   echo "This is our main branch"
#   npm run tsc && npm run build:develop
# else 
#   echo "This is not our main branch"
#   npm run tsc && npm run build:uat
# fi

if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
    pnpm tsc && pnpm run build
else 
    pnpm tsc && pnpm run build:develop
fi