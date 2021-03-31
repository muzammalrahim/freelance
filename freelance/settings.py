"""
Django settings for freelance project.
Generated by 'django-admin startproject' using Django 3.1.3.
For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path
import os, environ
from typing import List

env = environ.Env(
	# set casting, default value
	ALLOWED_HOSTS=(list, []),
	DEBUG=(bool, False)
)
environ.Env.read_env()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

SITE_URL = env('SITE_URL')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

ALLOWED_HOSTS: List[str] = env('ALLOWED_HOSTS')
# Application definition


INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'polymorphic',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'acount.apps.AcountConfig',
	'job.apps.JobConfig',
	'payment.apps.PaymentConfig',
	'report.apps.ReportConfig',
	'support.apps.SupportConfig',
	'drf_yasg',
	'rest_registration',
	'rest_framework',
	'rest_framework.authtoken',
	'rest_auth',
	'constance',
	'sslserver',
	'django.contrib.sites',
	'dj_rest_auth',
	'allauth',
	'allauth.account',
	'rest_auth.registration',
	'allauth.socialaccount',
	'allauth.socialaccount.providers.linkedin_oauth2',
	'django_filters'
]
MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'corsheaders.middleware.CorsMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CONSTANCE_CONFIG = {
	'15 % service free': (True, 'Answer to the Ultimate Question of Life, '
								'The Universe, and Everything'),
	# 'SENT_MONTHLY_INVOICE': (True, 'Set this flag as True to send monthly invoice to  '
	#                                'business owners.',),
	# 'VIDEOS_AUTO_APPROVAL': (False, 'Disable this flag to approve videos in admin end.'
	#                                 'Enable this flag to approve videos automatically without admin approval.'),

}
ROOT_URLCONF = 'freelance.urls'

CORS_ALLOW_ALL_ORIGINS = True

CORS_ORIGIN_WHITELIST = [
	"http://localhost:3000",
	"http://127.0.0.1:3000",
]

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [os.path.join(BASE_DIR, 'frontend')],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'freelance.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postgresql_psycopg2',
		'NAME': env('DB_NAME'),
		'USER': env('DB_USER'),
		'PASSWORD': env('DB_PASSWORD'),
		'HOST': env('DB_HOST'),
	}
}

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

REST_FRAMEWORK = {
	'DEFAULT_AUTHENTICATION_CLASSES': (
		'rest_framework.authentication.TokenAuthentication',
		# 'rest_framework.authentication.SessionAuthentication',
		'rest_framework.authentication.BasicAuthentication',
	),
	'DEFAULT_PERMISSION_CLASSES': (
		'rest_framework.permissions.IsAuthenticated',),
	'DEFAULT_PARSER_CLASSES': [
		'rest_framework.parsers.FormParser',
		'rest_framework.parsers.MultiPartParser',
		'rest_framework.parsers.JSONParser',
	],
	'DEFAULT_FILTER_BACKENDS': [
		'django_filters.rest_framework.DjangoFilterBackend',
		'rest_framework.filters.SearchFilter',
		'rest_framework.filters.OrderingFilter',
	]
}

SWAGGER_SETTINGS = {
	'SECURITY_DEFINITIONS': {
		'basic': {
			'type': 'basic'
		}
	},
	'USE_SESSION_AUTH': False,

}
AUTHENTICATION_BACKENDS = [

	'django.contrib.auth.backends.ModelBackend',
	'allauth.account.auth_backends.AuthenticationBackend',
]
REST_REGISTRATION = {
	'REGISTER_VERIFICATION_ENABLED': True,
	'REGISTER_EMAIL_VERIFICATION_ENABLED': True,
	'RESET_PASSWORD_VERIFICATION_ENABLED': True,
	'REGISTER_VERIFICATION_URL': '{}/verify-user/'.format(SITE_URL),
	'RESET_PASSWORD_VERIFICATION_URL': '{}/reset-password/'.format(SITE_URL),
	'REGISTER_EMAIL_VERIFICATION_URL': '{}/verify-email/'.format(SITE_URL),
	'VERIFICATION_FROM_EMAIL': 'shaheroumwali@gmail.com',
	'USER_LOGIN_FIELDS': ('email', 'username'),

	# 'USER_PUBLIC_FIELDS': ('first_name', 'last_name', 'email',),
	'REGISTER_SERIALIZER_CLASS': 'acount.serializers.CustomRegisterUserSerializer'
}

FREELANCER_USER = 'Freelancer'
CLIENT_USER = 'Client'
ADMIN_USER = 'Admin'

SITE_ID = 1

EMAIL_BACKEND = env('EMAIL_BACKEND')
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_USE_TLS = env('EMAIL_USE_TLS')
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')

AUTH_USER_MODEL = 'acount.User'

AUTHENTICATION_BACKENDS = ('acount.backends.EmailBackend',)

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = (
	os.path.join(BASE_DIR, 'frontend/admin/build/static'),
)

if DEBUG:
	STATICFILES_DIRS += (os.path.join(BASE_DIR, 'static'),)
	STATIC_ROOT = os.path.join(BASE_DIR, 'debug_static')
else:
	STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media/uploads')  # os operating system
