


resource "null_resource" "git_init_commit" {
  provisioner "local-exec" {
    command     = <<-EOT
    cd ..
    git add .
    git commit -m "add test tf"
    git push -u origin dev1
   EOT
    working_dir = "./${path.module}"
  }
}
