# -*- coding: utf-8 -*-
# © 2016 Hardikgiri Goswami < hardikgiri.goswami@gmail.com >


{
    "name": "Web Attachment",
    "description": """
    This module will add new UI for Attachment.
    """,
    "version": "9.0.1.0.0",
    "category": "web",
    "author": "Hardikgiri Goswami",
    "website": "http://hardikg.github.io",
    "license": "AGPL-3",
    "depends": [
        "web", "base"
    ],
    "data": [
        "views/templates.xml",
    ],
    'qweb': ["static/src/xml/form_extend.xml"],
    'installable': True,
}
