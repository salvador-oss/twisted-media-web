#!/bin/bash
# Uso: ./deploy.sh "descripción del cambio"
MSG=${1:-"actualización"}
git add .
git commit -m "$MSG"
git push
echo "✓ Deploy completado: $MSG"
