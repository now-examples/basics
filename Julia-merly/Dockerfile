FROM julia:1.0.0-stretch as base
WORKDIR /usr/src
COPY . .
RUN julia -e "using Pkg; Pkg.add(\"Merly\")"

CMD ["julia","main.jl"]
