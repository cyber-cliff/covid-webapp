# Generated by Django 2.2.11 on 2020-03-18 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='healthfacility',
            name='service_level',
            field=models.IntegerField(blank=True, choices=[(1, 'Level 1'), (2, 'Level 2'), (3, 'Level 3')], null=True),
        ),
    ]
