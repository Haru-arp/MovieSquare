# Generated by Django 3.2.12 on 2022-05-24 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_like_movie_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='like_movie_id',
        ),
    ]
