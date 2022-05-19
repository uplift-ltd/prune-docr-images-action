<p align="center">
  <a href="https://github.com/uplift-ltd/prune-docr-images-action/actions"><img alt="prune-docr-images-action status" src="https://github.com/uplift-ltd/prune-docr-images-action/workflows/build-test/badge.svg"></a>
</p>

# prune-docr-images-action

## Usage

```yml
name: Deploy

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: blah.sh

  prune:
    runs-on: ubuntu-latest
    needs: deploy
    if: ${{ needs.checks.outputs.result == 'success' }}
    steps:
      - name: Install doctl
        uses: digitalocean/action-doctl@v2
        with:
          token: ${{ secrets.DO_API_TOKEN }}
      - name: Prune tags
        uses: uplift-ltd/prune-docr-tags-action
        with:
          repository: my-app
          keep: 10
      - name: Run garbage collection
        run: doctl registry garbage-collection start
```

## Inputs

| input        | required | default | description                          |
| ------------ | -------- | ------- | ------------------------------------ |
| `repository` | required |         | The name of the repository to prune. |
| `keep`       | optional | `10`    | How many tags to keep.               |
