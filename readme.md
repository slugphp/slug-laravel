# Slug-Laravel

Laravel 5.2

### Install

Require
    `php -v >= 5.5.9` `nodejs`

Nginx 指到`public`目录下
```
    location / {
        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=$1  last;
            break;
        }
    }
 ```

```
# php
composer update
composer run-script post-root-package-install
composer run-script post-create-project-cmd

# db
php artisan migrate --force

# gulp
cd public
npm init && npm start
```