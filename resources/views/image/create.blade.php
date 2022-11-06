@extends('layouts.admin.admin')

@section('title', 'Create a image')

@section('content')
    <section>
        <div class="section-body">
            <form class="form form-validate floating-label" action="{{route('image.store')}}" method="POST" enctype="multipart/form-data" novalidate>
                @csrf
                <div class="row">
                    <div class="col-sm-9">
                        <div class="card">
                            <div class="card-underline">
                                <div class="card-head">
                                    <header class="ml-3 mt-2">Create Image</header>
                                </div>
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-sm-12">
                                            {{-- <div class="form-group">
                                                <input type="text" name="name" class="form-control" required
                                                    value="{{ old('name', isset($user->name) ? $user->name : '') }}"/>
                                                <span id="textarea1-error" class="text-danger">{{ $errors->first('name') }}</span>
                                                <label for="Name">Name</label>
                                            </div> --}}

                                            <div class="form-group ">
                                                <label for="name" class="col-form-label pt-0">Image</label>
                                                <div class="">
                                                    <input class="form-control" type="file" required name="image" value="{{ old('image') }}" placeholder="Upload Image">
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card" >
                            <div class="card-body">
                                
                                <hr>
                                <div class="row mt-2 justify-content-center">
                                    <div class="form-group">
                                        <div>
                                            <a class="btn btn-light waves-effect ml-1" href="{{ route('user.index') }}">
                                                <i class="md md-arrow-back"></i>
                                                Back
                                            </a>
                                            <input type="submit" name="pageSubmit" class="btn btn-danger waves-effect waves-light" value="Submit">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection

