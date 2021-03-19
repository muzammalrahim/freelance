from rest_registration.api.serializers import DefaultRegisterUserSerializer
from django.conf import settings
from acount import models
from rest_framework import serializers
from django.contrib.auth.models import Group
import base64, six, uuid

from job.models import Attachment
from django.core.files.base import ContentFile
from rest_auth.models import TokenModel
from django.core.files.base import File
import os
from django.core.files import temp as tempfile
from io import BytesIO


# class UploadedFile(File):
# 	"""
# 	An abstract uploaded file (``TemporaryUploadedFile`` and
# 	``InMemoryUploadedFile`` are the built-in concrete subclasses).
#
# 	An ``UploadedFile`` object behaves somewhat like a file object and
# 	represents some file data that the user submitted with a form.
# 	"""
#
# 	def __init__(self, file=None, name=None, content_type=None, size=None, charset=None, content_type_extra=None):
# 		super().__init__(file, name)
# 		self.size = size
# 		self.content_type = content_type
# 		self.charset = charset
# 		self.content_type_extra = content_type_extra
#
# 	def __repr__(self):
# 		return "<%s: %s (%s)>" % (self.__class__.__name__, self.name, self.content_type)
#
# 	def _get_name(self):
# 		return self._name
#
#
# 	def _set_name(self, name):
# 		# Sanitize the file name so that it can't be dangerous.
# 		if name is not None:
# 			# Just use the basename of the file -- anything else is dangerous.
# 			name = os.path.basename(name)
#
# 			# File names longer than 255 characters can cause problems on older OSes.
# 			if len(name) > 255:
# 				name, ext = os.path.splitext(name)
# 				ext = ext[:255]
# 				name = name[:255 - len(ext)] + ext
#
# 		self._name = name
#
# 	name = property(_get_name, _set_name)
#
#
# class TemporaryUploadedFile(UploadedFile):
# 	"""
# 	A file uploaded to a temporary location (i.e. stream-to-disk).
# 	"""
#
# 	def __init__(self, name, content_type, size, charset, content_type_extra=None):
# 		_, ext = os.path.splitext(name)
# 		file = tempfile.NamedTemporaryFile(suffix='.upload' + ext, dir=settings.FILE_UPLOAD_TEMP_DIR)
# 		super().__init__(file, name, content_type, size, charset, content_type_extra)
#
# 	def temporary_file_path(self):
# 		print()
# 		"""Return the full path of this file."""
# 		return self.file.name
#
# 	def close(self):
# 		try:
# 			return self.file.close()
# 		except FileNotFoundError:
# 			# The file was moved or deleted before the tempfile could unlink
# 			# it. Still sets self.file.close_called and calls
# 			# self.file.file.close() before the exception.
# 			pass
#
#
# class InMemoryUploadedFile(UploadedFile):
# 	"""
# 	A file uploaded into memory (i.e. stream-to-memory).
# 	"""
#
# 	def __init__(self, file, field_name, name, content_type, size, charset, content_type_extra=None):
# 		super().__init__(file, name, content_type, size, charset, content_type_extra)
# 		self.field_name = field_name
#
# 	def open(self, mode=None):
# 		self.file.seek(0)
# 		return self
#
# 	def chunks(self, chunk_size=None):
# 		self.file.seek(0)
# 		yield self.read()
#
# 	def multiple_chunks(self, chunk_size=None):
# 		# Since it's in memory, we'll never have multiple chunks.
# 		return False
#
#
# class SimpleUploadedFile(InMemoryUploadedFile):
# 	"""
# 	A simple representation of a file, which just has content, size, and a name.
# 	"""
#
# 	def __init__(self, name, content, content_type='text/plain'):
# 		content = content or b''
# 		super().__init__(BytesIO(content), None, name, content_type, len(content), None, None)
#
# 	@classmethod
# 	def from_dict(cls, file_dict):
# 		"""
# 		Create a SimpleUploadedFile object from a dictionary with keys:
# 		   - filename
# 		   - content-type
# 		   - content
# 		"""
# 		return cls(file_dict['filename'],
# 				   file_dict['content'],
# 				   file_dict.get('content-type', 'text/plain'))


# class Base64ImageField(serializers.ImageField):
#
# 	def __init__(self, *args, **kwargs):
# 		self.represent_in_base64 = kwargs.pop('represent_in_base64', False)
# 		super(Base64ImageField, self).__init__(*args, **kwargs)
#
# 	def to_internal_value(self, data):
#
# 		if isinstance(data, six.string_types):
# 			if 'data:' in data and ';base64,' in data:
# 				header, data = data.split(';base64,')
#
# 			try:
# 				decoded_file = base64.b64decode(data)
# 			except TypeError:
# 				self.fail('invalid_image')
#
# 			if 'data-orig' in header:
# 				fname, garbage = header.split(';data:')
# 				garbage_val, file_name = fname.split('data-orig:')
# 				complete_file_name = "thumb_%s" % (file_name)
# 			else:
# 				file_name = str(uuid.uuid4())[:12]  # 12 characters are more than enough.
# 				file_extension = self.get_file_extension(file_name, decoded_file)
# 				complete_file_name = "%s.%s" % (file_name, file_extension,)
# 			data = ContentFile(decoded_file, name=complete_file_name)
#
# 		return super(Base64ImageField, self).to_internal_value(data)
#
# 	def get_file_extension(self, file_name, decoded_file):
# 		import imghdr
#
# 		extension = imghdr.what(file_name, decoded_file)
# 		extension = "jpg" if extension == "jpeg" else extension
#
# 		return extension
#
# 	def from_native(self, data):
# 		if isinstance(data, basestring) and data.startswith('data:image'):
# 			# base64 encoded image - decode
# 			format, imgstr = data.split(';base64,')  # format ~= data:image/X,
# 			ext = format.split('/')[-1]  # guess file extension
#
# 			data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
#
# 		return super(Base64ImageField, self).from_native(data)
#
# 	def to_representation(self, file):
# 		if self.represent_in_base64:
# 			try:
# 				with open(file.path, 'rb') as f:
# 					return base64.b64encode(f.read()).decode()
# 			except Exception as e:
# 				print
# 				'Fails to decode file: %s (%s)' % (e.message, type(e))
# 		else:
# 			return super(Base64ImageField, self).to_representation(file)


class CitySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.City
		fields = '__all__'


class CountrySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Country
		fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.User
		fields = '__all__'


class SkillSerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Skill
		fields = '__all__'


class CategorySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Category
		fields = '__all__'


class ProfileSerializers(serializers.ModelSerializer):
	# avatar = Base64ImageField(required=False)
	ACCOUNT_TYPE_CHOICES = (
		('work', 'Work'),
		('hire', 'Hire'),
	)
	account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)

	def to_representation(self, instance):
		representation = super(ProfileSerializers, self).to_representation(instance)

		representation['user'] = UserSerializer(instance.user).data
		representation['city'] = CitySerializers(instance.city).data
		representation['country'] = CountrySerializers(instance.country).data
		representation['skills'] = SkillSerializers(instance.skills, many=True).data

		return representation

	def update(self, instance, validated_data):
		instance.updated_by = self.context['request'].user
		return super().update(instance, validated_data)

	def create(self, validated_data):
		if 'account_type' in validated_data:
			account_type = validated_data.pop('account_type')
			print("account_type", account_type)
			# if 'account_type' in validated_data :
			# 	validated_data['account_type'] = self.context['request'].User.account_type
			# account_type = validated_data.pop('account_type')
			user = self.context['request'].user
			# user = super().create(validated_data)
			if account_type == 'work':
				user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
			elif account_type == "hire":
				user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
		validated_data['created_by'] = self.context['request'].user
		return super().create(validated_data)

	class Meta:
		model = models.Profile
		fields = '__all__'


class ClientProfileSerializers(serializers.ModelSerializer):
	def to_representation(self, instance):
		representation = super(ClientProfileSerializers, self).to_representation(instance)

		representation['skills'] = SkillSerializers(instance.skills, many=True).data
		representation['user'] = UserSerializer(instance.user).data

		return representation

	class Meta:
		model = models.ClientProfile
		fields = '__all__'


class FreelancerProfileSerializers(serializers.ModelSerializer):
	# from job.serializers import AttachmentSerializer
	# skills = SkillSerializers(many=True, required=False)
	# category = CategorySerializers(many=True, required=False)
	city = CitySerializers(required=False)
	country = CountrySerializers(required=False)
	# license = AttachmentSerializer(write_only=True, required=False)
	# id_card = AttachmentSerializer(write_only=True, required=False)
	# certification = AttachmentSerializer(write_only=True, required=False)
	# user = UserSerializer(required=False)

	# user_type = UserSerializer

	def create(self, validated_data):

	# 	skills = validated_data.pop('skills')
	# 	category = validated_data.pop('category')
	# user = validated_data.pop('user')
		city = validated_data.pop('city')
		country = validated_data.pop('country')
	# 	license = validated_data.pop('license')
	# 	id_card = validated_data.pop('id_card')
	# 	certification = validated_data.pop('certification')
	#
	# user = models.User.objects.get(id=user)
	# 	Attachment.objects.create(**license)
	# 	Attachment.objects.create(**id_card)
	# 	Attachment.objects.create(**certification)
		city = models.City.objects.create(**city)
		country = models.Country.objects.create(**country)
	
		freelance_profile = models.FreelancerProfile.objects.create( city=city, country=country,
																	**validated_data)
# 
	# 	for data in skills:
	# 		k = models.Skill.objects.create(name=data.get('name'))
	# 		freelance_profile.skills.add(k)
	#
	# 	for data in category:
	# 		s = models.Category.objects.create(name=data.get('name'))
	# 		freelance_profile.category.add(s)
	#
		return freelance_profile

	def to_representation(self, instance):
		representation = super(FreelancerProfileSerializers, self).to_representation(instance)

		representation['skills'] = SkillSerializers(instance.skills, many=True).data
		representation['category'] = CategorySerializers(instance.category, many=True).data
		representation['user'] = UserSerializer(instance.user).data
		representation['city'] = CitySerializers(instance.city).data
		representation['country'] = CountrySerializers(instance.country).data

		return representation

	class Meta:
		model = models.FreelancerProfile
		fields = '__all__'


class MyTokenSerializer(serializers.Serializer):
	token = serializers.SerializerMethodField()

	class Meta:
		fields = ('access_token')

	def get_token(self, obj):
		# Later you change the simpleJWT token for more secure!
		token_obj, created = TokenModel.objects.get_or_create(user=obj.user)
		token = "Token {0}".format(token_obj.key)
		return token


class QuestionSerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Question
		fields = '__all__'


class SpecialitySerializers(serializers.ModelSerializer):
	class Meta:
		model = models.Speciality
		fields = '__all__'


class CustomRegisterUserSerializer(DefaultRegisterUserSerializer):
	ACCOUNT_TYPE_CHOICES = (
		('work', 'Work'),
		('hire', 'Hire'),
	)
	account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)

	"""
	Default serializer used for user registration. It will use these:
	* User fields
	* :ref:`user-hidden-fields-setting` setting
	* :ref:`user-public-fields-setting` setting
	to automagically generate the required serializer fields.
	"""

	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		self.Meta.fields = self.Meta.fields + ('account_type',)

	def create(self, validated_data):
		if 'account_type' in validated_data:
			account_type = validated_data.pop('account_type')
		user = super().create(validated_data)
		# Profile(user=user).save()

		# if 'account_type' in validated_data:
		# 	print("dddddddddddddddd")

		# if account_type == 'work':
			# models.FreelancerProfile(user=user).save()
			# user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
		# elif account_type == 'hire':
			# models.ClientProfile(user=user).save()
			# user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
		# else:
			# user.groups.add(Group.objects.get(name=settings.ADMIN_USER))

		return user
