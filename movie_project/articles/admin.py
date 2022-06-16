from django.contrib import admin
from .models import Article,Comment,Movie_comment
# Register your models here.

admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Movie_comment)