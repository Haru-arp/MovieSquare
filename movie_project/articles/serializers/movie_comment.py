from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Movie_comment

User = get_user_model()


class movie_commentSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = Movie_comment
        # fields = ('pk', 'user', 'content', )
        fields = ('pk', 'user',  'movie_id', 'content')
        
    
class movie_commentListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Movie_comment
        fields = ('pk', 'user', 'content',)
        read_only_fields = ('movie_id', ) 