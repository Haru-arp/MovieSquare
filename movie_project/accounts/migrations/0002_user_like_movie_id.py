# Generated by Django 3.2.12 on 2022-05-24 01:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='like_movie_id',
            field=models.CharField(default='none', max_length=200),
            preserve_default=False,
        ),
    ]
