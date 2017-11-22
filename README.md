# Slug-Laravel

Laravel 5.2

### Require

```
    php -v >= 5.5.9
    composer
```

Nginx 指到`public`目录下
```
    location / {
        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=$1  last;
            break;
        }
    }
```

### Install

```
    git clone git@github.com:slugphp/slug-laravel.git your-project-name
    cd  your-project-name

    composer update

    cp .env.example .env
    # change your .env param
    
    php artisan key:generate
    php artisan migrate

    php artisan register {admin-name} {admin-email}
    # set password
```
