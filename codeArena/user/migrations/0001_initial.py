# Generated by Django 3.2.5 on 2021-09-03 00:51

from django.db import migrations, models
import django.db.models.deletion
import user.enums


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('nickname', models.CharField(max_length=70)),
                ('first_name', models.CharField(max_length=70)),
                ('last_name', models.CharField(max_length=70)),
                ('password', models.CharField(max_length=70)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[(user.enums.UserStatus['ON'], 'Active'), (user.enums.UserStatus['BANNED'], 'Banned'), (user.enums.UserStatus['DEL'], 'Deleted')], max_length=10)),
                ('role_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.role')),
            ],
        ),
        migrations.CreateModel(
            name='Coder',
            fields=[
                ('id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='user.user')),
                ('city', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('phone_number', models.CharField(max_length=15)),
                ('level_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.level')),
            ],
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('coder_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.coder')),
            ],
        ),
    ]
