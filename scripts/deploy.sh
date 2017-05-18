#! /bin/bash
#
# deploy.sh
# Copyright (C) 2017 dhilipsiva <dhilipsiva@gmail.com>
#
# Distributed under terms of the MIT license.
#


npm version patch
git push
git push origin --tags
